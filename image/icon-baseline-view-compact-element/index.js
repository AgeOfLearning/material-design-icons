import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineViewCompactElement
 * @class IconBaselineViewCompactElement
 * @extends {AoflElement}
 */
class IconBaselineViewCompactElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineViewCompactElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-view-compact';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineViewCompactElement.is, IconBaselineViewCompactElement);

export default IconBaselineViewCompactElement;
