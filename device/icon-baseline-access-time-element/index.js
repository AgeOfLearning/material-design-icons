import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAccessTimeElement
 * @class IconBaselineAccessTimeElement
 * @extends {AoflElement}
 */
class IconBaselineAccessTimeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAccessTimeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-access-time';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAccessTimeElement.is, IconBaselineAccessTimeElement);

export default IconBaselineAccessTimeElement;
