import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpStarElement
 * @class IconSharpStarElement
 * @extends {AoflElement}
 */
class IconSharpStarElement extends AoflElement {
  /**
   * Creates an instance of IconSharpStarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-star';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpStarElement.is, IconSharpStarElement);

export default IconSharpStarElement;
