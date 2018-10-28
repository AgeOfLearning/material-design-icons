import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineVolumeUpElement
 * @class IconBaselineVolumeUpElement
 * @extends {AoflElement}
 */
class IconBaselineVolumeUpElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineVolumeUpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-volume-up';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineVolumeUpElement.is, IconBaselineVolumeUpElement);

export default IconBaselineVolumeUpElement;
