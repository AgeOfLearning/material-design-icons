import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAccessTimeElement
 * @class IconSharpAccessTimeElement
 * @extends {AoflElement}
 */
class IconSharpAccessTimeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAccessTimeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-access-time';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAccessTimeElement.is, IconSharpAccessTimeElement);

export default IconSharpAccessTimeElement;
