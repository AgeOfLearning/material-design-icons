import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTimelapseElement
 * @class IconBaselineTimelapseElement
 * @extends {AoflElement}
 */
class IconBaselineTimelapseElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTimelapseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-timelapse';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTimelapseElement.is, IconBaselineTimelapseElement);

export default IconBaselineTimelapseElement;
