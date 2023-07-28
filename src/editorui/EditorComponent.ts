import {UIBgStyle} from "../ui/UIStyle";
import MenuBarComponent from "./MenuBarComponent";
import SideNavigationComponent from "./SideNavigationComponent";
import SideBarComponent from "./SideBarComponent";
import BottomBarComponent from "./BottomBarComponent";
import DetailsComponent from "./DetailsComponent";
import MainComponent from "./MainComponent";
import {UIFillComponent} from "../ui/UIFillComponent";

//TODO: migrate margin to border instead inside components maybe.
export default class EditorComponent<S extends UIBgStyle> extends UIFillComponent {
    cell_size: number = 16;
    margin: number = 1;
    menu_bar: MenuBarComponent;
    side_nav: SideNavigationComponent;
    side_bar: SideBarComponent;
    bottom_bar: BottomBarComponent;
    details_comp: DetailsComponent;
    main_comp: MainComponent;
    menu_bar_height: number = 3; // Multiple of cell_size
    bottom_bar_height: number = 2; // Multiple of cell_size
    side_nav_width: number = 3; // Multiple of cell_size
    side_bar_width: number; // Can be fetched from side_bar.width, maybe replace with a getter
    constructor(width:number, height: number, style?: S) {
        super(width, height, style);
        this.menu_bar = new MenuBarComponent(width, this.menu_bar_height * this.cell_size, new UIBgStyle({bgColor: '#cccccc'}));
        this.container.addChild(this.menu_bar.container);
        this.bottom_bar = new BottomBarComponent(width, this.bottom_bar_height * this.cell_size, new UIBgStyle({bgColor: '#555555'}));
        this.container.addChild(this.bottom_bar.container);
        let remaining_height = this.size.height - (this.menu_bar_height * this.cell_size + this.margin) - (this.bottom_bar_height * this.cell_size + this.margin);
        this.side_nav = new SideNavigationComponent(this.side_nav_width * this.cell_size, remaining_height, new UIBgStyle({bgColor: '#444400'}));
        this.container.addChild(this.side_nav.container);
        let split_percent = 0.15;
        let remaining_width = this.size.width - (this.side_nav_width * this.cell_size + this.margin);
        let side_bar_width = remaining_width * split_percent;
        let main_content_width = remaining_width - side_bar_width - this.margin;
        this.side_bar = new SideBarComponent(side_bar_width, remaining_height, new UIBgStyle({bgColor: '#440044'}));
        this.container.addChild(this.side_bar.container);
        this.main_comp = new MainComponent(main_content_width, remaining_height, new UIBgStyle({bgColor: '#004444'}));
        this.container.addChild(this.main_comp.container);
    }

    get main_content_height(): number{
        return this.size.height - (this.menu_bar_height * this.cell_size + this.margin) - (this.bottom_bar_height * this.cell_size + this.margin);
    }

    get main_contert_width(): number{
        return 0;
    }

    draw() {
        super.draw();
        this.menu_bar.draw();
        // Ensure bottom_bar is at bottom
        this.bottom_bar.container.y = this.size.height - this.bottom_bar_height * this.cell_size;
        this.bottom_bar.draw();
        let nav_y = (this.menu_bar_height * this.cell_size) + this.margin
        this.side_nav.container.y = nav_y;
        this.side_nav.draw();
        this.side_bar.container.x = (this.side_nav_width * this.cell_size) + this.margin;
        this.side_bar.container.y = nav_y;
        this.side_bar.draw();
    }

    clear() {
        this.menu_bar.clear();
        this.bottom_bar.clear();
        this.side_nav.clear();
        this.side_bar.clear();
        super.clear();
    }
}