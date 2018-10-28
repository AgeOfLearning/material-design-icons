import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineVolumeDownElement
 * @class IconBaselineVolumeDownElement
 * @extends {AoflElement}
 */
class IconBaselineVolumeDownElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineVolumeDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-volume-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineVolumeDownElement.is, IconBaselineVolumeDownElement);

export default IconBaselineVolumeDownElement;
