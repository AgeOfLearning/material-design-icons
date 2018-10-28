import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSubwayElement
 * @class IconSharpSubwayElement
 * @extends {AoflElement}
 */
class IconSharpSubwayElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSubwayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-subway';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSubwayElement.is, IconSharpSubwayElement);

export default IconSharpSubwayElement;
