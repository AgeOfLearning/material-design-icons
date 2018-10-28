import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneViewModuleElement
 * @class IconTwotoneViewModuleElement
 * @extends {AoflElement}
 */
class IconTwotoneViewModuleElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneViewModuleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-view-module';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneViewModuleElement.is, IconTwotoneViewModuleElement);

export default IconTwotoneViewModuleElement;
