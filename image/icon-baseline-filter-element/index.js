import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFilterElement
 * @class IconBaselineFilterElement
 * @extends {AoflElement}
 */
class IconBaselineFilterElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFilterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-filter';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFilterElement.is, IconBaselineFilterElement);

export default IconBaselineFilterElement;
