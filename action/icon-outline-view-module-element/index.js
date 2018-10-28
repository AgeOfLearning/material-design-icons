import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineViewModuleElement
 * @class IconOutlineViewModuleElement
 * @extends {AoflElement}
 */
class IconOutlineViewModuleElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineViewModuleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-view-module';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineViewModuleElement.is, IconOutlineViewModuleElement);

export default IconOutlineViewModuleElement;
