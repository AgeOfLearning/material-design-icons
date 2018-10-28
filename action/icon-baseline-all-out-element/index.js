import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAllOutElement
 * @class IconBaselineAllOutElement
 * @extends {AoflElement}
 */
class IconBaselineAllOutElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAllOutElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-all-out';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAllOutElement.is, IconBaselineAllOutElement);

export default IconBaselineAllOutElement;
