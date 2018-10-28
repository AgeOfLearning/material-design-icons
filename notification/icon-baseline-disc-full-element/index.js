import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDiscFullElement
 * @class IconBaselineDiscFullElement
 * @extends {AoflElement}
 */
class IconBaselineDiscFullElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDiscFullElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-disc-full';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDiscFullElement.is, IconBaselineDiscFullElement);

export default IconBaselineDiscFullElement;
