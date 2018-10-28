import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpNavigationElement
 * @class IconSharpNavigationElement
 * @extends {AoflElement}
 */
class IconSharpNavigationElement extends AoflElement {
  /**
   * Creates an instance of IconSharpNavigationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-navigation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpNavigationElement.is, IconSharpNavigationElement);

export default IconSharpNavigationElement;
