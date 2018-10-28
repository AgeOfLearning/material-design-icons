import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSlowMotionVideoElement
 * @class IconSharpSlowMotionVideoElement
 * @extends {AoflElement}
 */
class IconSharpSlowMotionVideoElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSlowMotionVideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-slow-motion-video';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSlowMotionVideoElement.is, IconSharpSlowMotionVideoElement);

export default IconSharpSlowMotionVideoElement;
