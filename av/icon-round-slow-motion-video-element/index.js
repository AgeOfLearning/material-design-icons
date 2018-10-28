import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSlowMotionVideoElement
 * @class IconRoundSlowMotionVideoElement
 * @extends {AoflElement}
 */
class IconRoundSlowMotionVideoElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSlowMotionVideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-slow-motion-video';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSlowMotionVideoElement.is, IconRoundSlowMotionVideoElement);

export default IconRoundSlowMotionVideoElement;
