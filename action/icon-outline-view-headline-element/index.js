import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineViewHeadlineElement
 * @class IconOutlineViewHeadlineElement
 * @extends {AoflElement}
 */
class IconOutlineViewHeadlineElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineViewHeadlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-view-headline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineViewHeadlineElement.is, IconOutlineViewHeadlineElement);

export default IconOutlineViewHeadlineElement;
