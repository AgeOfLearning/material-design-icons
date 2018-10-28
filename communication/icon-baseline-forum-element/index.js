import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineForumElement
 * @class IconBaselineForumElement
 * @extends {AoflElement}
 */
class IconBaselineForumElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineForumElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-forum';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineForumElement.is, IconBaselineForumElement);

export default IconBaselineForumElement;
