import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMapElement
 * @class IconOutlineMapElement
 * @extends {AoflElement}
 */
class IconOutlineMapElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMapElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-map';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMapElement.is, IconOutlineMapElement);

export default IconOutlineMapElement;
