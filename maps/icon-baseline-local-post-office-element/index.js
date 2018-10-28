import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocalPostOfficeElement
 * @class IconBaselineLocalPostOfficeElement
 * @extends {AoflElement}
 */
class IconBaselineLocalPostOfficeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocalPostOfficeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-local-post-office';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocalPostOfficeElement.is, IconBaselineLocalPostOfficeElement);

export default IconBaselineLocalPostOfficeElement;
