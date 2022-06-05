import { Component, OnInit } from '@angular/core';
import { AdminComponent } from '../../../admin.component';

@Component({
    selector: 'app-menu',
    template: `
        <div class="layout-menu-container">
            <ul class="layout-menu" role="menu" (keydown)="onKeydown($event)">
                <li app-menu class="layout-menuitem-category" *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true" role="none">
                    <div class="layout-menuitem-root-text" [attr.aria-label]="item.label">{{item.label}}</div>
                    <ul role="menu">
                        <li app-menuitem *ngFor="let child of item.items" [item]="child" [index]="i" role="none"></li>
                    </ul>
                </li>
                <a href="https://www.primefaces.org/primeblocks-ng/#/">
                    <img src="assets/layout/images/{{admin.config.dark ? 'banner-primeblocks-dark' : 'banner-primeblocks'}}.png" alt="Prime Blocks" class="w-full mt-3"/>
                </a>
            </ul>
        </div>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public admin: AdminComponent) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items:[
                    {label: 'Dashboard',icon: 'pi pi-fw pi-home', routerLink: ['/admin']}
                ]
            },
            {
                label: 'UI Components',
                items: [
                    {label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/admin/formlayout']},
                    {label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/admin/input']},
                    {label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/admin/floatlabel']},
                    {label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/admin/invalidstate']},
                    {label: 'Button', icon: 'pi pi-fw pi-mobile', routerLink: ['/admin/button'], class: 'rotated-icon'},
                    {label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/admin/table']},
                    {label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/admin/list']},
                    {label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/admin/tree']},
                    {label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/admin/panel']},
                    {label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/admin/overlay']},
                    {label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/admin/media']},
                    {label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/admin/menu']},
                    {label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/admin/message']},
                    {label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/admin/file']},
                    {label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/admin/charts']},
                    {label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/admin/misc']}
                ]
            },
            {
                label:'UI Blocks',
                items:[
                    {label: 'Free Blocks', icon: 'pi pi-fw pi-eye', routerLink: ['/admin/blocks'], badge: 'NEW'},
                    {label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank'},
                ]
            },
            {label:'Icons',
                items:[
                    {label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['/admin/icons']},
                ]
            },
            {
                label: 'Pages',
                items: [
                    {label: 'Crud', icon: 'pi pi-fw pi-user-edit', routerLink: ['/admin/crud']},
                    {label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['/admin/timeline']},
                    {label: 'Empty', icon: 'pi pi-fw pi-circle', routerLink: ['/admin/empty']}
                ]
            },
            {
                label: 'Hierarchy',
                items: [
                    {
                        label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    {label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark'},
                                    {label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark'},
                                    {label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark'},
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    {label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark'}
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    {label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark'},
                                    {label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark'},
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    {label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark'},
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                label:'Get Started',
                items:[
                    {
                        label: 'Documentation', icon: 'pi pi-fw pi-question', routerLink: ['/admin/documentation']
                    },
                    {
                        label: 'View Source', icon: 'pi pi-fw pi-search', url: ['https://github.com/primefaces/sakai-ng'], target: '_blank'
                    }
                ]
            }
        ];
    }

    onKeydown(event: KeyboardEvent) {
        const nodeElement = (<HTMLDivElement> event.target);
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            event.preventDefault();
        }
    }
}
