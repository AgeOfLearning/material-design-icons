import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpViewModuleElement
 * @class IconSharpViewModuleElement
 * @extends {AoflElement}
 */
class IconSharpViewModuleElement extends AoflElement {
  /**
   * Creates an instance of IconSharpViewModuleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-view-module';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpViewModuleElement.is, IconSharpViewModuleElement);

export default IconSharpViewModuleElement;
