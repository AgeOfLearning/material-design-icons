import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineArchiveElement
 * @class IconBaselineArchiveElement
 * @extends {AoflElement}
 */
class IconBaselineArchiveElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineArchiveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-archive';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineArchiveElement.is, IconBaselineArchiveElement);

export default IconBaselineArchiveElement;
