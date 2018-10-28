import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpWbSunnyElement
 * @class IconSharpWbSunnyElement
 * @extends {AoflElement}
 */
class IconSharpWbSunnyElement extends AoflElement {
  /**
   * Creates an instance of IconSharpWbSunnyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-wb-sunny';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpWbSunnyElement.is, IconSharpWbSunnyElement);

export default IconSharpWbSunnyElement;
