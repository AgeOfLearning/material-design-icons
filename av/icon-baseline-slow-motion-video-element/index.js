import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSlowMotionVideoElement
 * @class IconBaselineSlowMotionVideoElement
 * @extends {AoflElement}
 */
class IconBaselineSlowMotionVideoElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSlowMotionVideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-slow-motion-video';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSlowMotionVideoElement.is, IconBaselineSlowMotionVideoElement);

export default IconBaselineSlowMotionVideoElement;
