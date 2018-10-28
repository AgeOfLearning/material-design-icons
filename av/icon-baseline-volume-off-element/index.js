import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineVolumeOffElement
 * @class IconBaselineVolumeOffElement
 * @extends {AoflElement}
 */
class IconBaselineVolumeOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineVolumeOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-volume-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineVolumeOffElement.is, IconBaselineVolumeOffElement);

export default IconBaselineVolumeOffElement;
