import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFullscreenElement
 * @class IconBaselineFullscreenElement
 * @extends {AoflElement}
 */
class IconBaselineFullscreenElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFullscreenElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-fullscreen';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFullscreenElement.is, IconBaselineFullscreenElement);

export default IconBaselineFullscreenElement;
