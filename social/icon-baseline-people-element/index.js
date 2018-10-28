import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePeopleElement
 * @class IconBaselinePeopleElement
 * @extends {AoflElement}
 */
class IconBaselinePeopleElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePeopleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-people';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePeopleElement.is, IconBaselinePeopleElement);

export default IconBaselinePeopleElement;
