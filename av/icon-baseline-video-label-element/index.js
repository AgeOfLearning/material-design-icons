import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineVideoLabelElement
 * @class IconBaselineVideoLabelElement
 * @extends {AoflElement}
 */
class IconBaselineVideoLabelElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineVideoLabelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-video-label';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineVideoLabelElement.is, IconBaselineVideoLabelElement);

export default IconBaselineVideoLabelElement;
