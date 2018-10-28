import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSubwayElement
 * @class IconOutlineSubwayElement
 * @extends {AoflElement}
 */
class IconOutlineSubwayElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSubwayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-subway';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSubwayElement.is, IconOutlineSubwayElement);

export default IconOutlineSubwayElement;
