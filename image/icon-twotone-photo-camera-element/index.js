import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePhotoCameraElement
 * @class IconTwotonePhotoCameraElement
 * @extends {AoflElement}
 */
class IconTwotonePhotoCameraElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePhotoCameraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-photo-camera';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePhotoCameraElement.is, IconTwotonePhotoCameraElement);

export default IconTwotonePhotoCameraElement;
