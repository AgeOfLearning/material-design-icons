import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePeopleOutlineElement
 * @class IconBaselinePeopleOutlineElement
 * @extends {AoflElement}
 */
class IconBaselinePeopleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePeopleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-people-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePeopleOutlineElement.is, IconBaselinePeopleOutlineElement);

export default IconBaselinePeopleOutlineElement;
