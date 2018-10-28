import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineNewReleasesElement
 * @class IconBaselineNewReleasesElement
 * @extends {AoflElement}
 */
class IconBaselineNewReleasesElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineNewReleasesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-new-releases';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineNewReleasesElement.is, IconBaselineNewReleasesElement);

export default IconBaselineNewReleasesElement;
