import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineListElement
 * @class IconBaselineListElement
 * @extends {AoflElement}
 */
class IconBaselineListElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineListElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-list';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineListElement.is, IconBaselineListElement);

export default IconBaselineListElement;
