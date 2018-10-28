import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineNotesElement
 * @class IconBaselineNotesElement
 * @extends {AoflElement}
 */
class IconBaselineNotesElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineNotesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-notes';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineNotesElement.is, IconBaselineNotesElement);

export default IconBaselineNotesElement;
