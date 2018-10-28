import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDescriptionElement
 * @class IconSharpDescriptionElement
 * @extends {AoflElement}
 */
class IconSharpDescriptionElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDescriptionElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-description';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDescriptionElement.is, IconSharpDescriptionElement);

export default IconSharpDescriptionElement;
