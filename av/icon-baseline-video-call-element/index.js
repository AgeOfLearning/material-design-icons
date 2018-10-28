import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineVideoCallElement
 * @class IconBaselineVideoCallElement
 * @extends {AoflElement}
 */
class IconBaselineVideoCallElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineVideoCallElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-video-call';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineVideoCallElement.is, IconBaselineVideoCallElement);

export default IconBaselineVideoCallElement;
