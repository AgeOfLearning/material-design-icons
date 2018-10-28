import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSupervisedUserCircleElement
 * @class IconTwotoneSupervisedUserCircleElement
 * @extends {AoflElement}
 */
class IconTwotoneSupervisedUserCircleElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSupervisedUserCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-supervised-user-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSupervisedUserCircleElement.is, IconTwotoneSupervisedUserCircleElement);

export default IconTwotoneSupervisedUserCircleElement;
