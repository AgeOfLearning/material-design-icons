import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineNaturePeopleElement
 * @class IconBaselineNaturePeopleElement
 * @extends {AoflElement}
 */
class IconBaselineNaturePeopleElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineNaturePeopleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-nature-people';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineNaturePeopleElement.is, IconBaselineNaturePeopleElement);

export default IconBaselineNaturePeopleElement;
