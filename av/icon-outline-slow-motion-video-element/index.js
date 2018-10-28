import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSlowMotionVideoElement
 * @class IconOutlineSlowMotionVideoElement
 * @extends {AoflElement}
 */
class IconOutlineSlowMotionVideoElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSlowMotionVideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-slow-motion-video';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSlowMotionVideoElement.is, IconOutlineSlowMotionVideoElement);

export default IconOutlineSlowMotionVideoElement;
