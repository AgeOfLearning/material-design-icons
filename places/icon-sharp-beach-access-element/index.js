import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBeachAccessElement
 * @class IconSharpBeachAccessElement
 * @extends {AoflElement}
 */
class IconSharpBeachAccessElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBeachAccessElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-beach-access';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBeachAccessElement.is, IconSharpBeachAccessElement);

export default IconSharpBeachAccessElement;
