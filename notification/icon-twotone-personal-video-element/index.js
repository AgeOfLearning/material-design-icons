import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePersonalVideoElement
 * @class IconTwotonePersonalVideoElement
 * @extends {AoflElement}
 */
class IconTwotonePersonalVideoElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePersonalVideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-personal-video';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePersonalVideoElement.is, IconTwotonePersonalVideoElement);

export default IconTwotonePersonalVideoElement;
