import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePlayCircleOutlineElement
 * @class IconTwotonePlayCircleOutlineElement
 * @extends {AoflElement}
 */
class IconTwotonePlayCircleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePlayCircleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-play-circle-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePlayCircleOutlineElement.is, IconTwotonePlayCircleOutlineElement);

export default IconTwotonePlayCircleOutlineElement;
