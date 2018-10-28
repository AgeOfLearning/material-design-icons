import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePhotoCameraElement
 * @class IconOutlinePhotoCameraElement
 * @extends {AoflElement}
 */
class IconOutlinePhotoCameraElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePhotoCameraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-photo-camera';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePhotoCameraElement.is, IconOutlinePhotoCameraElement);

export default IconOutlinePhotoCameraElement;
