import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSupervisedUserCircleElement
 * @class IconOutlineSupervisedUserCircleElement
 * @extends {AoflElement}
 */
class IconOutlineSupervisedUserCircleElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSupervisedUserCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-supervised-user-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSupervisedUserCircleElement.is, IconOutlineSupervisedUserCircleElement);

export default IconOutlineSupervisedUserCircleElement;
