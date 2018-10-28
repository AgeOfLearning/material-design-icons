import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDetailsElement
 * @class IconBaselineDetailsElement
 * @extends {AoflElement}
 */
class IconBaselineDetailsElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDetailsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-details';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDetailsElement.is, IconBaselineDetailsElement);

export default IconBaselineDetailsElement;
