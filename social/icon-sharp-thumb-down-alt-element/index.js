import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpThumbDownAltElement
 * @class IconSharpThumbDownAltElement
 * @extends {AoflElement}
 */
class IconSharpThumbDownAltElement extends AoflElement {
  /**
   * Creates an instance of IconSharpThumbDownAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-thumb-down-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpThumbDownAltElement.is, IconSharpThumbDownAltElement);

export default IconSharpThumbDownAltElement;
