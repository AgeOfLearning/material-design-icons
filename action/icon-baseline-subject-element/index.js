import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSubjectElement
 * @class IconBaselineSubjectElement
 * @extends {AoflElement}
 */
class IconBaselineSubjectElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSubjectElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-subject';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSubjectElement.is, IconBaselineSubjectElement);

export default IconBaselineSubjectElement;
