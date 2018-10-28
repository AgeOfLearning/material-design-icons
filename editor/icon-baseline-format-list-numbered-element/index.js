import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFormatListNumberedElement
 * @class IconBaselineFormatListNumberedElement
 * @extends {AoflElement}
 */
class IconBaselineFormatListNumberedElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFormatListNumberedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-format-list-numbered';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFormatListNumberedElement.is, IconBaselineFormatListNumberedElement);

export default IconBaselineFormatListNumberedElement;
