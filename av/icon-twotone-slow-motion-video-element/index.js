import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSlowMotionVideoElement
 * @class IconTwotoneSlowMotionVideoElement
 * @extends {AoflElement}
 */
class IconTwotoneSlowMotionVideoElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSlowMotionVideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-slow-motion-video';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSlowMotionVideoElement.is, IconTwotoneSlowMotionVideoElement);

export default IconTwotoneSlowMotionVideoElement;
