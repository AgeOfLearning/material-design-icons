import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineInsertLinkElement
 * @class IconBaselineInsertLinkElement
 * @extends {AoflElement}
 */
class IconBaselineInsertLinkElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineInsertLinkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-insert-link';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineInsertLinkElement.is, IconBaselineInsertLinkElement);

export default IconBaselineInsertLinkElement;
