import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineViewColumnElement
 * @class IconBaselineViewColumnElement
 * @extends {AoflElement}
 */
class IconBaselineViewColumnElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineViewColumnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-view-column';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineViewColumnElement.is, IconBaselineViewColumnElement);

export default IconBaselineViewColumnElement;
